import os
import requests
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

# ====== CONFIG ======
BOT_TOKEN = "8377097614:AAGt8MOFJfzdYCtpikwNK_noCsenKXVTUY0"   # 🔴 Replace
DOWNLOAD_DIR = "/tmp"          # Directory for temporary downloads
CHAT_ID = "5933203565"       # Optional: restrict bot to your chat
# ====================

def start(update, context):
    update.message.reply_text("👋 Send me a file URL and I'll fetch it for you!")

def handle_message(update, context):
    url = update.message.text.strip()

    if not url.startswith("http"):
        update.message.reply_text("⚠️ Please send a valid URL.")
        return

    try:
        # Download file
        local_filename = os.path.join(DOWNLOAD_DIR, url.split("/")[-1])
        update.message.reply_text(f"⬇️ Downloading {url} ...")

        r = requests.get(url, stream=True)
        with open(local_filename, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)

        # Send file to Telegram
        with open(local_filename, "rb") as f:
            context.bot.send_document(chat_id=update.message.chat_id, document=f)

        update.message.reply_text("✅ File sent successfully!")

        # Delete local file
        os.remove(local_filename)

    except Exception as e:
        update.message.reply_text(f"❌ Error: {str(e)}")

def main():
    updater = Updater(BOT_TOKEN, use_context=True)
    dp = updater.dispatcher

    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(MessageHandler(Filters.text & ~Filters.command, handle_message))

    updater.start_polling()
    updater.idle()

if __name__ == "__main__":
    main()

import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java IDE!");
        
        // Example: Calculate factorial
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number to calculate factorial: ");
        
        try {
            int n = scanner.nextInt();
            long factorial = 1;
            
            for (int i = 1; i <= n; i++) {
                factorial *= i;
            }
            
            System.out.println("Factorial of " + n + " is: " + factorial);
        } catch (Exception e) {
            System.out.println("Invalid input. Please enter a valid number.");
        }
        
        scanner.close();
    }
} 
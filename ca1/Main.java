// Online Java Compiler
// Use this editor to write, compile and run your Java code online
class A {
    public void aa() {
        System.out.println("Method aa() is called.");
    }
}

class B extends A { // Fixed inheritance syntax
}

class Main {
    public static void main(String[] args) {
        String[] arr = "string".split(""); // Works, but includes an empty first element
        String a = "goat";
        System.out.println(a.charAt(a.length() - 1)); // Prints last character
        
        for (String c : arr) {
            System.out.print(c + " "); // Prints characters of "string"
        }
        System.out.println(); // Newline for better formatting

        B obj = new B(); // Object of class B
        obj.aa(); // Calls method from parent class A
    }
}

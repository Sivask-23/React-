public class revAString {
    public static void revUsingForLoop(String st) {
        for (int i = st.length() - 1; i >= 0; i--) {
            System.out.print(st.charAt(i) + "");
        }
        System.out.println();
    }

    public static void revUsingBuiltin(String st) {

        StringBuilder sb = new StringBuilder(st);
        sb.reverse();
        System.out.println("Reversed string using builtin fn is " + sb);
    }

    public static String revUsingTwoPointer(String st) {

        char[] ar = st.toCharArray();
        int fIndex = 0;
        int lindex = st.length() - 1;
        while (fIndex < lindex) {
            char temp = ar[fIndex];
            ar[fIndex] = ar[lindex];
            ar[lindex] = temp;
            fIndex++;
            lindex--;
        }
        return new String(ar);
    }


    public static void revUsingRec(String st,int n) {

        if (n<0){
            return;
        }

        System.out.print(st.charAt(n));
        revUsingRec(st,n-1);
    }


    public static void main(String[] args) {
        String str = "name";
        System.out.print("Reversed string using For loop is ");
        revUsingForLoop(str);
        revUsingBuiltin(str);
        System.out.println("Reversed String using Two pointer technique " + revUsingTwoPointer(str));
        System.out.print("Reversed string using Recursion ");
        revUsingRec(str,str.length()-1);
    }
}

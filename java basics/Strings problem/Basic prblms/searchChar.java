public class searchChar {
    public static void main(String[] args) {
        String line="My name is Sivakumar S";
        line=line.toLowerCase();
        System.out.println("First occurance os S is at "+line.indexOf('s'));
        int pos=line.indexOf('s');
        System.out.println("Occurance of S after first ocrnce is at "+line.indexOf('s',pos+1));
        System.out.println("Last Occurance of S after first ocrnce is at "+line.lastIndexOf('s'));
        System.out.println(line.length());
        System.out.println("word name starts from index "+line.indexOf("name"));
    }
}

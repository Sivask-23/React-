import java.util.ArrayList;
import java.util.Collections;

public class basicArraylistOperations {
    public static void main(String[] args) {
//       basic operations
//        Integer | Float | String | Boolean
        ArrayList<Integer> list1 = new ArrayList<Integer>();
//        ArrayList<String> stringlist=new ArrayList<String>();
//        Add elements
        list1.add(1);
        list1.add(0,23);
        list1.add(2);
        System.out.println(list1);
//        add elements in between
        list1.add(1,24);
        System.out.println(list1);
//        change existing element
        list1.set(0,5);
        System.out.println(list1);
//        delete element
        list1.remove(1);
        System.out.println(list1);
        System.out.println("Size of arraylist is:"+list1.size());
//        get using for
        for (int i = 0; i < list1.size(); i++) {
            System.out.println(list1.get(i));
        }
//        sorting
        Collections.sort(list1);
        System.out.println(list1);

    }
}

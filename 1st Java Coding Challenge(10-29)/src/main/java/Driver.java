import java.util.ArrayList;

public class Driver {

    public static void main(String args[]){
        int ary[]={14, 12, 70, 15, 99, 65, 21, 90};
        int x = 111;
        int sum = 0;
        ArrayList<Integer> temp = new ArrayList<>();
        for (int i = 0; i <= (ary.length - 1); i++) {
                if (sum == x) {
                    break;
                }

                for (int j = i; j <= (ary.length - 1); j++) {
                    sum += ary[j];
                    temp.add(ary[j]);
                    if (sum == x) {
                        break;
                    }
                    else if(j==(ary.length-1)){
                        sum=0;
                        temp.clear();
                        break;
                    }
                }
            }

        if(sum==0){
            System.out.println("No sum found");
        }
        else {
            System.out.println(sum + "\n" + temp);
        }
    }
}

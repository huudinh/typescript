# TS38 TypeScript Abstract Classes

### Abstract Classes là gì

Trong TypeScript, abstract classes là một loại class đặc biệt không thể được khởi tạo trực tiếp. Thay vào đó, chúng thường được sử dụng như một lớp cơ sở mà các lớp khác có thể kế thừa.

Abstract classes có thể chứa chi tiết về cách các phương thức hoạt động (được gọi là phương thức được triển khai) và/hoặc chỉ đơn giản là định nghĩa các phương thức mà các lớp kế thừa phải triển khai (được gọi là phương thức trừu tượng).

### Ví dụ

```
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Moving along...");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Woof! Woof!');
    }
}

const myDog = new Dog();
myDog.makeSound(); // Output: 'Woof! Woof!'
myDog.move(); // Output: 'Moving along...'

```

Trong ví dụ trên, Animal là một abstract class có một phương thức trừu tượng makeSound() và một phương thức được triển khai move(). Lớp Dog kế thừa từ Animal và triển khai phương thức makeSound(). Khi chúng ta tạo một đối tượng mới từ lớp Dog và gọi phương thức makeSound() và move(), chúng ta sẽ thấy output tương ứng.

Lưu ý rằng chúng ta không thể tạo một đối tượng mới từ lớp Animal vì nó là một abstract class.

*Bài tiếp theo [TS39 TypeScript Abstract Classes](/session/session_039_ts_abstract.md)*
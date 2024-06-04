# TS39 Interfaces

### Giới thiệu về interfaces

Trong TypeScript, một interface được sử dụng để mô tả cấu trúc của một đối tượng. Điều này giúp đảm bảo rằng đối tượng tuân theo một hợp đồng cụ thể, có nghĩa là nó phải có những thuộc tính và phương thức cụ thể mà interface yêu cầu.

```
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet(): void;
}

let user: Person = {
    firstName: "Nguyen",
    lastName: "Van A",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

user.greet(); // Outputs: Hello, my name is Nguyen Van A
```

Trong ví dụ trên, Person là một interface định nghĩa cấu trúc cho một đối tượng Person. Đối tượng user tuân theo cấu trúc này. Nếu user không có bất kỳ thuộc tính hoặc phương thức nào được yêu cầu bởi interface, TypeScript sẽ báo lỗi.

Interface giúp tạo ra mã nguồn dễ đọc, dễ bảo dưỡng và ít lỗi hơn bằng cách đảm bảo rằng các đối tượng tuân theo một hợp đồng cụ thể.

### Interfaces extendings 

Một interface có thể kế thừa từ một hoặc nhiều interfaces khác. Điều này cho phép bạn tạo ra các interface phức tạp hơn mà không cần phải lặp lại các thuộc tính hoặc phương thức đã được định nghĩa trong các interface khác. Đây là một cách hiệu quả để chia sẻ các thuộc tính và phương thức giữa các interface.

```
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
    bark(): void;
}

let myDog: Dog = {
    name: "Fido",
    age: 5,
    breed: "Labrador",
    bark() {
        console.log("Woof!");
    }
};

console.log(myDog.name); // Outputs: Fido
myDog.bark(); // Outputs: Woof!

```

Trong ví dụ trên, Dog interface kế thừa từ Animal interface. Do đó, một đối tượng của kiểu Dog phải có các thuộc tính name và age (từ Animal interface), cũng như breed và phương thức bark() (được định nghĩa trong Dog interface). Nếu một đối tượng của kiểu Dog không có bất kỳ thuộc tính hoặc phương thức nào được yêu cầu bởi Dog hoặc Animal interface, TypeScript sẽ báo lỗi.

Điều này giúp đảm bảo tính nhất quán và rõ ràng trong việc định nghĩa các đối tượng trong TypeScript.
# TS36 TypeScript Inheritance

Inheritance trong TypeScript là một tính năng cho phép một lớp (class) kế thừa các thuộc tính và phương thức từ một lớp khác. Điều này giúp tái sử dụng mã, giảm thiểu sự trùng lặp, và tạo ra cấu trúc rõ ràng hơn cho các đối tượng trong chương trình.

### Kế thừa (Inheritance)

Trong TypeScript, một lớp (class) có thể kế thừa các thuộc tính (properties) và phương thức (methods) từ một lớp khác. Điều này giúp tái sử dụng mã nguồn và giảm bớt việc phải viết lại mã. Để kế thừa một lớp, chúng ta sử dụng từ khóa extends.

### Ghi đè phương thức (Method Overriding)

Khi một lớp kế thừa từ một lớp khác, nó có thể ghi đè lên các phương thức của lớp cha. Điều này cho phép chúng ta tùy chỉnh hành vi của lớp con. Nếu muốn sử dụng phương thức của lớp cha, chúng ta có thể sử dụng từ khóa super.

### Ví dụ 

```
class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    private jobTitle: string) {
    super(firstName, lastName);
  }
  describe(): string {
    return super.describe() + ` I'm a ${this.jobTitle}.`;
  }
}

let employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.describe()); // Output: "This is John Doe. I'm a Web Developer."
```

Trong ví dụ trên, lớp Employee kế thừa từ lớp Person và ghi đè lên phương thức describe(). Khi gọi employee.describe(), nó sẽ in ra: “This is John Doe. I’m a Web Developer.”.

### Tóm lại

- Inheritance trong TypeScript cho phép một lớp kế thừa các thuộc tính và phương thức từ lớp khác, giúp tái sử dụng mã và tạo cấu trúc rõ ràng hơn.
- extends là từ khóa được sử dụng để định nghĩa một lớp con kế thừa từ một lớp cơ sở.
- super được sử dụng trong lớp con để gọi các phương thức hoặc truy cập các thuộc tính của lớp cơ sở.

*Bài tiếp theo [TS37 TypeScript Static Methods and Properties](/session/session_037_ts_static.md)*
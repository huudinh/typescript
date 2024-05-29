# TS37 TypeScript Static Methods and Properties

### TypeScript Static là gì

Trong TypeScript, từ khóa static được sử dụng để khởi tạo các thuộc tính tĩnh (static properties) và phương thức tĩnh (static methods) của một class. Các phương thức và thuộc tính tĩnh này có thể được gọi trực tiếp từ class sau khi đã khai báo mà không cần phải khởi tạo các đối tượng từ class đó.

### Ví dụ

```
class Employee {
  static companyInfo = 'yeulaptrinh';

  static getCompanyInfo(): string {
    return this.companyInfo;
  }
}

console.log(Employee.companyInfo); // yeulaptrinh
console.log(Employee.getCompanyInfo()); // yeulaptrinh
```

companyInfo là một thuộc tính tĩnh và getCompanyInfo là một phương thức tĩnh. Chúng ta có thể truy cập chúng trực tiếp từ class Employee mà không cần khởi tạo một đối tượng từ class.

Tuy nhiên, cần lưu ý rằng các thuộc tính và phương thức tĩnh chỉ có thể truy cập đến các thuộc tính và phương thức tĩnh khác, chúng không thể truy cập đến các thuộc tính và phương thức không tĩnh.

### Static and Non Static trong typescript

Static và non-static đều liên quan đến cách bạn khai báo và sử dụng thuộc tính và phương thức trong một class.

- Các thuộc tính và phương thức static thuộc về class chứ không phải đối tượng được tạo từ class. Chúng có thể được truy cập mà không cần tạo một thể hiện của class.

```
class Circle {
  static pi = 3.14;
  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}

console.log(Circle.pi); // 3.14
console.log(Circle.calculateArea(5)); // 78.5
```

- Các thuộc tính và phương thức non-static (hay còn gọi là thuộc tính và phương thức instance) thuộc về từng đối tượng riêng lẻ được tạo từ class. Chúng chỉ có thể được truy cập thông qua một thể hiện của class.

```
class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

let myCircle = new Circle(5);
console.log(myCircle.radius); // 5
console.log(myCircle.calculateCircumference()); // 31.41592653589793
```

Cần lưu ý rằng, trong một class, bạn có thể có cả thuộc tính và phương thức static và non-static12. Tuy nhiên, các phương thức static chỉ có thể truy cập đến các thuộc tính static, trong khi các phương thức non-static có thể truy cập đến cả thuộc tính static và non-static

*Bài tiếp theo [TS38 TypeScript Abstract Classes](/session/session_038_ts_abstract.md)*
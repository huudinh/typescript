# TS34 TypeScript readonly

Từ khóa readonly trong TypeScript được sử dụng để làm cho một thuộc tính ở dạng chỉ đọc trong class, type, hoặc interface. Các thành viên chỉ đọc có thể được truy cập bên ngoài lớp, nhưng giá trị của chúng không thể thay đổi. Điều này giúp đảm bảo rằng giá trị không thể thay đổi sau khi khởi tạo, giảm nguy cơ sửa đổi không chủ ý có thể gây ra lỗi hoặc hành vi không mong muốn trong mã.

### Trong Class

```
class Employee {
    readonly empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
    }
}

let emp = new Employee(10, "John");
emp.empCode = 20; // Lỗi biên dịch
emp.empName = 'Bill'; // Lỗi biên dịch
```

Trong ví dụ trên, thuộc tính empCode chỉ đọc, nên nó có thể được khởi tạo tại thời điểm khai báo hoặc trong phương thức khởi tạo. Nếu chúng ta cố gắng thay đổi giá trị empCode sau khi đối tượng đã được khởi tạo, trình biên dịch sẽ hiển thị lỗi biên dịch.

### Một interface cũng có thể có các thuộc tính chỉ đọc

```
interface IEmployee {
    readonly empCode: number;
    empName: string;
}

let empObj: IEmployee = { empCode: 1, empName: "Steve" };
empObj.empCode = 100; // Lỗi biên dịch: Không thể thay đổi thuộc tính chỉ đọc
```

Như bạn có thể thấy ở ví dụ trên, thuộc tính empCode là chỉ đọc, vì vậy chúng ta có thể gán một giá trị tại thời điểm tạo một đối tượng. Theo cách tương tự, bạn có thể sử dụng Readonly<T> để tạo kiểu chỉ đọc


### Readonly và Const

- readonly áp dụng cho thuộc tính của lớp hoặc giao diện, trong khi const áp dụng cho biến.
- readonly chỉ đảm bảo thuộc tính không thể thay đổi giá trị sau khi khởi tạo, nhưng không đảm bảo tính bất biến (immutability) của đối tượng.
- const đảm bảo biến không thể thay đổi giá trị sau khi khởi tạo, nhưng không đảm bảo tính bất biến của mảng hoặc đối tượng mà biến đó tham chiếu.

*Bài tiếp theo [TS35 Typescript Getters and Setters](/session/session_035_ts_getters.md)*
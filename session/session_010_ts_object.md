# TS10 Object Type

Kiểu dữ liệu object là một kiểu dữ liệu đặc biệt dùng để đại diện cho một đối tượng (object) trong JavaScript. Đối tượng (object) trong TypeScript là một tập hợp các cặp key-value (cặp thuộc tính và giá trị) và có thể chứa các thuộc tính (properties) và phương thức (methods).

### Sử dụng kiểu dữ liệu object

Khi bạn khai báo một biến với kiểu object trong TypeScript, bạn chỉ định rằng biến đó sẽ chứa một đối tượng (object), và TypeScript sẽ không kiểm tra cụ thể các thuộc tính (properties) của đối tượng đó.

```
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);
```

Trong đoạn mã này, biến employee được khai báo với kiểu object. Sau đó, bạn có thể gán một đối tượng với các thuộc tính firstName, lastName, age, và jobTitle cho biến này. Tuy nhiên, TypeScript không kiểm tra các thuộc tính của đối tượng trong trường hợp này.

### Hạn chế của kiểu object

Một trong những hạn chế của kiểu object là bạn không thể truy cập vào các thuộc tính của đối tượng một cách dễ dàng mà không gặp lỗi.

```
employee = "Jane"; // Lỗi: Không thể gán kiểu string cho biến kiểu object

console.log(employee.hireDate); // Lỗi: Thuộc tính hireDate không tồn tại trên kiểu object
```

Khi bạn cố gắng gán một kiểu dữ liệu khác (như string) cho biến kiểu object hoặc truy cập vào một thuộc tính không tồn tại trên đối tượng, TypeScript sẽ báo lỗi.

### Sử dụng khai báo cụ thể cho đối tượng

Thay vì sử dụng kiểu object, bạn nên sử dụng các khai báo cụ thể để mô tả cấu trúc của đối tượng một cách rõ ràng hơn.

```
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
```

Trong ví dụ này, biến employee được khai báo với một kiểu dữ liệu cụ thể, mô tả rõ ràng các thuộc tính mà một đối tượng employee cần phải có. Khi sử dụng kiểu dữ liệu này, TypeScript sẽ kiểm tra các thuộc tính của đối tượng để đảm bảo tính hợp lệ và sẽ cung cấp các thông báo lỗi nếu có sự không phù hợp.

### Tóm tắt
- Kiểu dữ liệu object trong TypeScript đại diện cho một đối tượng (object) trong JavaScript.
- Việc sử dụng kiểu object có thể dẫn đến các hạn chế trong việc kiểm tra kiểu dữ liệu và truy cập vào các thuộc tính của đối tượng.
- Thay vì sử dụng kiểu object, nên sử dụng các khai báo cụ thể để mô tả cấu trúc của đối tượng một cách rõ ràng và an toàn hơn.

*Bài tiếp theo [TS11 Array Type](/session/session_011_ts_array.md)*
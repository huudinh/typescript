# TS9 Boolean Type

Kiểu dữ liệu boolean đại diện cho hai giá trị logic: true và false. Đây là một kiểu dữ liệu cơ bản được sử dụng rộng rãi trong các ứng dụng TypeScript để biểu thị các trạng thái logic và điều kiện.

### Khai báo biến kiểu boolean

```
let isActive: boolean = true;
```

Trong đoạn mã trên, biến isActive được khai báo với kiểu boolean và được gán giá trị là true.

### Gán giá trị và thay đổi giá trị của biến boolean

Biến boolean có thể được gán giá trị là true hoặc false:

```
let isOpen: boolean = false;
isOpen = true; // Gán lại giá trị cho biến isOpen
```

Bạn có thể thay đổi giá trị của biến boolean trong quá trình thực thi của chương trình.

### Sử dụng biến boolean trong các biểu thức điều kiện

Các biến boolean thường được sử dụng trong các biểu thức điều kiện như if, else, while, for, v.v. Ví dụ:

```
let isLogged: boolean = true;

if (isLogged) {
    console.log("User is logged in.");
} else {
    console.log("User is not logged in.");
}
```

Trong ví dụ này, câu lệnh console.log trong khối if sẽ được thực thi nếu isLogged có giá trị là true. Nếu isLogged là false, thì câu lệnh trong khối else sẽ được thực thi.

### Phép toán logic với boolean

Bạn có thể sử dụng các toán tử logic như && (AND), || (OR), ! (NOT) để thực hiện các phép toán trên các biến boolean:

```
let hasPermission: boolean = true;
let isAdmin: boolean = false;

// AND operator (&&)
if (hasPermission && isAdmin) {
    console.log("User has admin permissions.");
} else {
    console.log("User does not have admin permissions.");
}

// OR operator (||)
if (hasPermission || isAdmin) {
    console.log("User has at least one of the required permissions.");
} else {
    console.log("User does not have any required permissions.");
}

// NOT operator (!)
if (!isAdmin) {
    console.log("User is not an admin.");
}
```

### Kiểu dữ liệu boolean và TypeScript

Kiểu dữ liệu boolean trong TypeScript rất hữu ích để biểu thị các trạng thái logic và điều kiện trong mã TypeScript của bạn. TypeScript sử dụng kiểu boolean để kiểm soát luồng điều khiển và thực hiện các quyết định dựa trên các điều kiện logic trong chương trình.

*Bài tiếp theo [TS10 Object Type](/session/session_010_ts_object.md)*
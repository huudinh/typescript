# TS32 Classes

Classes trong TypeScript là một khái niệm cơ bản từ lập trình hướng đối tượng (OOP). Chúng cung cấp một bản vẽ để tạo ra các đối tượng, bao gồm cả các thuộc tính dữ liệu và các phương thức để thao tác dữ liệu này.

### Fields

Một khai báo field tạo ra một thuộc tính có thể ghi được công khai trên một class. Ví dụ:

```
class Point {
  x: number;
  y: number;
}
const pt = new Point();
pt.x = 0;
pt.y = 0;
```

### Constructors

Các hàm tạo class rất giống với các hàm. Bạn có thể thêm các tham số với các chú thích kiểu, giá trị mặc định và các phiên bản quá tải. Ví dụ:

```
class Point {
  x: number;
  y: number;
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

### Readonly

Các trường có thể được tiền tố với bộ chỉnh sửa readonly. Điều này ngăn chặn các phép gán cho trường bên ngoài hàm tạo.

### Visibility

Các thành viên của class cũng có thể được gán các chỉnh sửa đặc biệt ảnh hưởng đến khả năng nhìn thấy. Có ba chỉnh sửa khả năng nhìn thấy chính trong TypeScript: public (mặc định), private và protected.

### sử dụng class trong TypeScript

```
class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const pt = new Point(5, 10);
console.log(`Point: (${pt.x}, ${pt.y})`);
```

Trong ví dụ trên, chúng ta đã tạo một class Point với hai thuộc tính x và y. Chúng ta cũng đã định nghĩa một hàm tạo (constructor) để khởi tạo các giá trị cho x và y.

Sau đó, chúng ta tạo một đối tượng mới pt từ class Point và in ra giá trị của x và y.

### Thêm các phương thức vào class

```
class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  distanceFromOrigin() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const pt = new Point(3, 4);
console.log(`Distance from origin: ${pt.distanceFromOrigin()}`);
```

Trong ví dụ này, chúng ta đã thêm một phương thức distanceFromOrigin vào class Point. Phương thức này tính toán khoảng cách từ điểm đến gốc tọa độ.

*Bài tiếp theo [TS33 TypeScript Access Modifiers](/session/session_033_ts_access.md)*
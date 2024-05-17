# TS30 TypeScript Rest Parameters

Trong TypeScript, Rest Parameters (tham số còn lại) là một tính năng cho phép bạn làm việc với một số lượng không xác định tham số như một mảng. Điều này rất hữu ích khi bạn không biết trước số lượng tham số mà hàm của bạn sẽ nhận.

### Cú pháp

```
function tenHam(...rest: kieuDuLieu[]) {
    // Thân hàm
}
```

Rest Parameters trong TypeScript phải sử dụng với array type vì nó được thiết kế để xử lý một số lượng không xác định tham số. Khi bạn gọi một hàm với Rest Parameters, bạn có thể truyền vào bất kỳ số lượng tham số nào, và tất cả các tham số này sẽ được tổ chức thành một mảng.


### Ví dụ

```
function tinhTong(...so: number[]): number {
    let tong = 0;
    so.forEach((num) => tong += num);
    return tong;
}

console.log(tinhTong(1, 2, 3, 4)); // Kết quả: 10
```

Trong ví dụ trên, hàm tinhTong nhận một số lượng không xác định tham số và tính tổng của chúng. Tham số ...so là một Rest Parameter, nó cho phép bạn truyền vào bất kỳ số lượng tham số nào khi gọi hàm.

Lưu ý rằng Rest Parameter phải là tham số cuối cùng trong danh sách tham số của hàm, và một hàm chỉ có thể có một Rest Parameter.

*Bài tiếp theo [TS31 TypeScript Function Overloading](/session/session_031_ts_overloading.md)*
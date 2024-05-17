# TS29 TypeScript Default Parameters

Trong TypeScript, Default Parameters (tham số mặc định) là một tính năng cho phép bạn đặt giá trị mặc định cho tham số của hàm. Nếu không có giá trị nào được truyền vào cho tham số đó khi gọi hàm, thì giá trị mặc định sẽ được sử dụng.

### Cú pháp

```
function tenHam(thamSo1: kieuDuLieu = giaTriMacDinh1, thamSo2: kieuDuLieu = giaTriMacDinh2, ...): kieuTraVe {
    // Thân hàm
}
```

### Ví dụ

```
function tinhGiaSauGiamGia(gia: number, giamGia: number = 0.05): number {
    return gia * (1 - giamGia);
}

console.log(tinhGiaSauGiamGia(100)); // Kết quả: 95
```

Trong ví dụ trên, hàm tinhGiaSauGiamGia có hai tham số là gia và giamGia. Tham số giamGia có giá trị mặc định là 0.05. Khi gọi hàm mà không truyền giá trị cho giamGia, giá trị 0.05 sẽ được sử dụng. 

*Bài tiếp theo [TS30 TypeScript Rest Parameters  ](/session/session_030_ts_rest.md)*
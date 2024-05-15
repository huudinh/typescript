# TS24 TypeScript break

### Sử dụng TypeScript break để kết thúc vòng lặp

Bạn có thể sử dụng từ khóa break để kết thúc vòng lặp sớm.

```
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Kết thúc vòng lặp khi i bằng 5
    }
    console.log(i);
}
```

Trong ví dụ trên, vòng lặp sẽ chỉ in ra các số từ 0 đến 4. Khi i đạt giá trị 5, từ khóa break được gọi và vòng lặp kết thúc ngay lập tức, không chạy các lệnh tiếp theo trong vòng lặp.

### Sử dụng typescript break bên trong switch...case

Trong TypeScript, từ khóa break thường được sử dụng trong câu lệnh switch...case để kết thúc một case cụ thể. Dưới đây là một ví dụ:

```
let day = 3;
switch (day) {
    case 1:
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    default:
        console.log("Không xác định");
}

```

Trong ví dụ trên, khi day bằng 3, chương trình sẽ in ra “Thứ Tư” và từ khóa break sẽ kết thúc case này, không kiểm tra các case tiếp theo. Nếu không có từ khóa break, chương trình sẽ tiếp tục kiểm tra các case tiếp theo cho đến khi gặp break hoặc kết thúc khối switch.


*Bài tiếp theo [TS25 TypeScript Continue ](/session/session_025_ts_continue.md)*
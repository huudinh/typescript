# TS22 TypeScript while

### Giới thiệu về vòng lặp while

- Tương tự for, vòng lặp while giúp chúng ta có thể viết code khác đi 'if/else', switch/case

- Nếu như với vòng lặp for, chúng ta sẽ biết 'nên chạy' vòng lặp bao nhiêu lần (1 con số cụ thể), thì với while, chúng ta có thể chạy với số lần không cần biết trước

```
while(condition) {
    // do something
}
```

Nếu như điều kiện = true => thực thi khối code, else.. do nothing

- Để thoát khỏi vòng lặp (vì mặc định vòng lặp sẽ chạy không giới hạn), cần dùng keyword break;

```
while(condition) {
    // do something
    // ...
    if(anotherCondition)
    break;
}
```

### example

```
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}
```

Đầu tiên, chúng ta khởi tạo một biến có tên là counter và gán giá trị ban đầu là 0.

Tiếp theo, chúng ta sử dụng một vòng lặp while. Điều kiện của vòng lặp là counter < 5, nghĩa là vòng lặp sẽ tiếp tục chạy miễn là giá trị của counter nhỏ hơn 5.

In giá trị hiện tại của counter ra console.

Sau đó, chúng ta tăng giá trị của counter lên 1.

Khi counter đạt đến giá trị 5, điều kiện của vòng lặp while không còn đúng nữa, và vòng lặp kết thúc.

```
let counter = 3;
while (true) {
    console.log(counter);
    if(counter % 2 === 0) break;
    counter++;
    // 3, 4
}
```

Khởi tạo biến counter với giá trị ban đầu là 3

Vòng lặp while vẫn có điều kiện là true, nghĩa là nó sẽ chạy mãi mãi nếu không có lệnh break để dừng vòng lặp.

Bên trong vòng lặp, chúng ta in giá trị hiện tại của counter ra console.

Tiếp theo, chúng ta kiểm tra xem counter có chia hết cho 2 không (nghĩa là counter có phải là số chẵn không). Nếu counter là số chẵn, chúng ta sẽ thoát khỏi vòng lặp sớm bằng cách sử dụng lệnh break.

Nếu counter không phải là số chẵn, chúng ta sẽ tăng giá trị của counter lên 1.

*Bài tiếp theo [TS23 TypeScript do...while ](/session/session_023_ts_do_while.md)*
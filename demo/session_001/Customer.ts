// class Customer {  
//     Name : string;  
//     constructor (firstName: string, lastName: string)  
//     {  
//         this.Name = firstName + "  " + lastName;  
//     }  
//     GetName()  
//     {  
//         return "Hello, " + this.Name;  
//     }  
// }  
// let cust = new Customer("Jimi","Scott");

// console.log(cust.GetName());


class Customer {
    Name : string; 
    // Khai báo một thuộc tính công khai 
    // 'Name' kiểu string

    // Đây là phương thức khởi tạo được gọi 
    // khi một đối tượng mới được tạo
    constructor (firstName: string, lastName: string) {
        // Thuộc tính 'Name' được đặt thành chuỗi ghép 
        // của 'firstName', một khoảng trắng, 
        // và 'lastName'
        this.Name = firstName + "  " + lastName;
    }

    // 'GetName' là một phương thức 
    // trả về lời chào với 'Name'
    GetName() {
        return "Hello, " + this.Name;
    }
}


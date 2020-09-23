window.onload = function () {

    function formattedPhone(phone) {
        let formPhone = "", i = 0, corr;
        if (phone.length == 11 && (phone.charAt(0) == 8 || phone.charAt(0) == 7)) {
            formPhone += "+7 (";
            i += 1;
            corr = -1;
        } else if (phone.length == 10 && phone.charAt(0) == 9) {
            formPhone += "+7 (";
            corr = -2;
        } else if (phone.length == 12 && phone.charAt(0) == "+") {
            corr = 0;
        } else {
            return "Формат функции неверный";
        }
        for (; i < phone.length; i++) {
            formPhone += phone.charAt(i);
            switch (i) {
                case 1 + corr:
                    formPhone += " (";
                    break;
                case 4 + corr:
                    formPhone += ") ";
                    break;
                case 7 + corr:
                case 9 + corr:
                    formPhone += "-";
                    break;
            }
        }
        return formPhone;
    }

    let number = "+71234567890";

    while (number != 1) {
        number = prompt('Введите номер телефона, для выхода введите 1', "+71234567890");
        alert(formattedPhone(number));
    }
};

<div class="contact-form-page">
    <h2 class="title18 dark font-bold text-uppercase play-font">Контактная информация</h2>
    <form class="contact-form feedback-form cart-form" method="post">
        <input type="hidden" name="type" value="{{$contact_type}}">
        <p class="contact-name">
            <input name="name" class="dark border"
                   placeholder="Ваше имя*"
                   required
                   value="" type="text">
        </p>
        <p class="contact-phone">
            <input name="phone" class="dark border"
                   required
                   placeholder="Телефон*"
                   type="tel"
            >
        </p>
        <p class="contact-email">
            <input name="email" class="dark border"
                   placeholder="Email*"
                   required
                   pattern="(.*)@(.*)$"
                   type="text"
                   oninvalid="this.setCustomValidity('Введите корректный адрес электронной почты')"
                   oninput="setCustomValidity('')"
            >
        </p>
        <p class="contact-message">
                                                <textarea name="message" class="dark border"
                                                          placeholder="Ваш комментарий"
                                                          cols="30" rows="10"></textarea>
        </p>
        <p class="contact-privacy-policy">
            <input name="privacy-policy"
                   type="checkbox"
                   required
                   checked
                   id="privacy-policy"
                   value="1"
            /> <label for="privacy-policy">Я согласен с
                <a target="_blank" class="btn-link" href="/privacy-policy">политикой конфиденциальности</a>
                и
                <a target="_blank" class="btn-link" href="/terms-of-return">политикой возврата при оплате
                    картой</a>.</label>
        </p>
        <div class="contact-pay_type select-box">
            <select required
                    name="pay_type"
                    id="pay_type">
                <option value="">ВЫБРАТЬ СПОСОБ ОПЛАТЫ</option>
                <option value="2">Наличными при получении</option>
                <option value="0">Банковской картой на сайте онлайн</option>
                <option value="1">Банковской картой на сайте онлайн (предоплата 50%)</option>
            </select>
        </div>
        <p class="contact-submit cart-submit">
            <input class="shop-button white bg-dark" type="submit"
                   value="Оформить заказ">
            <span class="cart-submit_totals-price">Сумма к оплате: <span class="number"></span><span class="rub"> Р</span></span>
        </p>
        <p>Нажимая на кнопку "Оформить заказ", вы соглашаетесь с офертой.</p>
    </form>
</div>
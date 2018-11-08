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
                   id="privacy-policy"
                   value="1"
            /> <label for="privacy-policy">Я согласен с
                <a target="_blank" class="btn-link" href="/privacy-policy">пользовательским соглашением и условиями
                    продажи</a>
                и
                <a target="_blank" class="btn-link" href="/terms-of-return">политикой возврата при оплате
                    картой</a>.</label>
        </p>
        <p class="contact-submit cart-submit">
            <input class="shop-button white bg-dark" type="submit"
                   value="Оформить и оплатить заказ">
        </p>
        <p>Нажимая на кнопку "Оформить и оплатить заказ", вы соглашаетесь с офертой.</p>
    </form>
</div>
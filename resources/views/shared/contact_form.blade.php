<div class="contact-form-page thanks">
    <h2 class="title18 dark font-bold text-uppercase play-font">Благодарим за обратную связь. Мы свяжемся с вами в ближайшее время!</h2>
</div>
<div class="contact-form-page">
    <h2 class="title18 dark font-bold text-uppercase play-font">Контактная информация</h2>
    <form class="contact-form feedback-form" method="post">
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
        <p class="contact-submit">
            <input class="shop-button white bg-dark" type="submit"
                   value="Оформить заказ">
        </p>
        <p>Нажимая на кнопку "Оформить заказ", вы соглашаетесь с <a class="btn-link" href="/privacy-policy">Пользовательским соглашением и условиями продажи</a></p>
    </form>
</div>
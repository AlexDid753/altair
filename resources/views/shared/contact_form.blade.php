<div class="contact-form-page thanks">
    <h2 class="title18 dark font-bold text-uppercase play-font">Благодарим за обратную связь. Мы свяжемся с вами в ближайшее время!</h2>
</div>
<div class="contact-form-page">
    <h2 class="title18 dark font-bold text-uppercase play-font">Оставить контакты</h2>
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
                   pattern="\d*"
                   type="text"
                   oninvalid="this.setCustomValidity('Введите корректный номер телефона')"
                   oninput="setCustomValidity('')"
            >
        </p>
        <p class="contact-email">
            <input name="email" class="dark border"
                   placeholder="Email*"
                   required
                   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
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
                   value="Оставить контакты">
        </p>
    </form>
</div>
function initEditor() {
    console.log('mce start');
    tinymce.init({
        selector: '.ckeditor',
        plugins: "image, link, code",
        toolbar: "link image code",
        language: 'ru',
        language_url : '/packages/tinymce/langs/ru.js',
        file_browser_callback : elFinderBrowser,
        init_instance_callback: function (editor) {
            editor.on('blur', function (e) {
                editor.save();
                multiItemFill($('#' + editor.id).data('target'));

                var matches;
                if (typeof app != 'undefined' && (matches = /block-(\d+)/ig.exec(editor.id))) {
                    app.__vue__.$refs.contentBuilder.blocks[matches[1]].text = editor.getContent();
                }
            });
        }
    });
}

initEditor();

function stopEditor() {
    console.log('mce stopped');
    tinymce.remove();
}

function restartEditor() {
    stopEditor();
    initEditor();
}

function elFinderBrowser (field_name, url, type, win) {
    tinymce.activeEditor.windowManager.open({
        file: appConfig.elfinderRoute,
        title: 'elFinder 2.0',
        width: 900,
        height: 450,
        resizable: 'yes'
}, {
        setUrl: function (url) {
            win.document.getElementById(field_name).value = url;
        }
    });
    return false;
}

function processSelectedFile(e, t) {
    $("#" + t).val(e).change();

    var matches;
    if (typeof app != 'undefined' && (matches = /block-(\d+)-image-(\d+)/ig.exec(t))) {
        app.__vue__.$refs.contentBuilder.blocks[matches[1]].images[matches[2]].src = e;
    }
}

function multiItemFill(id) {
    var multiItems = [];
    $('#' + id).parent().find('.multi-item-container .multi-item').each(function(index) {
        var subItems = {};
        $(this).find('[data-target]').each(function() {
            subItems[$(this).data('key')] = $(this).val();
            subItems['sort'] = index;
        });
        multiItems.push(subItems);
    });

    $('#' + id).val(JSON.stringify(multiItems));
    console.log(JSON.stringify(multiItems));
}

//Устанавливаем значение скрытого инпута с типом страницы соотвественно выбранному элементу в селекте на форме Menu
function hiddenInputSet() {
    $('input#page_type').val($('select#page_id option:selected').data('page-type'));
}
hiddenInputSet();

jQuery(function($) {

    feather.replace();

    $(document).on("click", ".popup_selector", function (e) {
        e.preventDefault();
        var t = $(this).attr("data-inputid");
        var n = "/elfinder/popup/";
        var r = n + t;
        $.colorbox({href: r, fastIframe: true, iframe: true, width: "70%", height: "50%"})
    });

    $(".popup_content").colorbox({inline:true, href: $(this).attr("href"), width: "70%", height: "50%"});

    $(document).on('change', '.img-field', function() {
        var previewImgField = $(this).val() ? '<img src="/' + $(this).val() + '" height="37px">' : '',
            target = '.img-preview[data-preview-id="' + $(this).attr('id') + '"]';
        $(target).html(previewImgField);
    });
    $('.img-field').change();


    $('.multi-item-container').on('keyup, change', '.multi-item-element', function(e) {
        multiItemFill($(this).data('target'));
    });

    $('.multi-item-container').on('click', '.plus', function(e) {
        e.preventDefault();

        var item = $(this).closest('.multi-item'),
            editor = item.find('.ckeditor');

        if (editor.length)
            stopEditor();

        var newEl = item.clone(),
            imgField = newEl.find(".img-field"),
            fileField = newEl.find(".file-field"),
            previewImgContainer = newEl.find(".img-preview"),
            uploadButton = newEl.find('[data-inputid]');

        // targets for images
        if (imgField.length) {
            var newId = imgField.attr('id').replace(/[0-9]+$/g, Math.floor(Date.now() / 1000));

            imgField.attr('id', newId);
            previewImgContainer.attr('data-preview-id', newId);
            uploadButton.attr('data-inputid', newId);

            previewImgContainer.html('');
        }
        // targets for files
        if (fileField.length) {
            var newId = fileField.attr('id').replace(/[0-9]+$/g, Math.floor(Date.now() / 1000));

            fileField.attr('id', newId);
            uploadButton.attr('data-inputid', newId);
        }

        newEl.find('input, textarea').each(function() {
            $(this).val('');
        });

        item.after(newEl);
        multiItemFill(item.find('[data-target]').data('target'));

        if (editor.length)
            initEditor();
    });

    $('.multi-item-container').on('click', '.minus', function(e) {
        e.preventDefault();
        var item = $(this).closest('.multi-item'),
            container = $(this).closest('.multi-item-container'),
            target = item.find('[data-target]').data('target');
        if (container.find('.multi-item').length > 1) {
            item.remove();
            multiItemFill(target);
        }
    });

    $('.multi-item-container').on('click', '.up', function(e) {
        e.preventDefault();
        var item = $(this).closest('.multi-item'),
            prev = item.prev(),
            editor = item.find('.ckeditor');

        if (prev) {
            if (editor.length)
                stopEditor();

            item.insertBefore(prev);

            if (editor.length)
                initEditor();

            multiItemFill(item.find('[data-target]').data('target'));
        }
    });

    $('.multi-item-container').on('click', '.down', function(e) {
        e.preventDefault();
        var item = $(this).closest('.multi-item'),
            next = item.next(),
            editor = item.find('.ckeditor');

        if (next) {
            if (editor.length)
                stopEditor();

            item.insertAfter(next);

            if (editor.length)
                initEditor();

            multiItemFill(item.find('[data-target]').data('target'));
        }

    });

    $('.sidebar-sticky .nav-link').each(function() {
        if (location.pathname.indexOf($(this).attr('href')) > -1)
            $(this).addClass('active');
    });

    $('select#page_id').change(function () {hiddenInputSet()});
});
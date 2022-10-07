document.getElementById('gacha').addEventListener("click", function() {

    var sticker, quotes, sts, tampung_sticker, tampung_quotes;
    sts = true;
    sticker = ['😍', '😘', '🥰', '😻', '💋', '❤', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '❣', '💕', '💞', '💓', '💗', '💖', '💘', '💝'];
    quotes = ['Terkadang hati melihat apa yang tidak terlihat oleh mata.', 'Aku bersumpah untuk sangat mencintaimu dalam segala bentukmu, sekarang dan selamanya. Aku berjanji untuk tidak pernah melupakan bahwa ini adalah cinta sekali seumur hidup.', 'Cinta kita seperti angin, aku tidak bisa melihatnya, tapi aku bisa merasakannya.', 'Kisah cinta sejati tidak pernah berakhir.',
        'Mungkin ketidaksempurnaan kita yang membuat kita begitu sempurna satu sama lain.', 'Cinta adalah ruang dan waktu yang diukur oleh hati.', 'Cinta terdiri dari satu jiwa yang menghuni dua tubuh.', 'Kamu mungkin memegang tanganku untuk sementara waktu, tetapi kamu memegang hatiku selamanya.', 'Kamu telah mengganti mimpi burukku dengan mimpi indah, kekhawatiranku dengan kebahagiaan, dan ketakutanku dengan cinta.',
        '100 hati pun masih terlalu sedikit untuk membawa semua cintaku padamu.', 'Aku butuh kamu seperti jantung butuh detak.', 'Cinta itu bukan berarti mencintai seseorang yang sempurna tapi bagaimana mencintai seseorang yang tidak sempurna dengan cara sempurna', 'Mencintai bukanlah tentang memberikan yang terbaik dalam kelebihan, tetapi memberikan yang terbaik dalam kekurangan.', 'Tak perlu sibuk mencari seseorang yang menurutmu sempurna, jika di dekatmu sudah ada orang yang bisa membuatmu bahagia.', 'Cinta sebenarnya tak memandang materi dan perbedaan. Tapi perjuangan untuk mempertahankan.',
        'Rasa romantis memang fantastis dan bombastis, tapi juga cepat habis. Cuma cinta sejati yang bisa setia sampai mati.', 'Sebaik atau seburuk apa pun kamu aku tetap mencintaimu dengan sepenuh hatiku, kamu tahu kenapa? Karena cinta tidak butuh alasan atau syarat.', 'Aku hanya mau kamu tahu bahwa kamu sangat spesial. Dan satu-satunya alasan aku memberitahumu adalah karena aku tidak yakin ada yang sudah pernah memberitahumu sebelumnya.', 'Cinta sejati bukan berarti tidak terpisahkan. Itu hanya berarti dipisahkan, namun, tidak ada yang berubah.', 'Kisah cinta sejati tidak pernah berakhir.',
        'Mungkin aku memang bukan yang terbaik, namun aku mencoba untuk menjadi yang terbaik untuk mu (by dhika)', 'I love you even when I\'m not on earth (by dhika)'
    ];

    tampung_quotes = quotes[Math.floor((Math.random() * quotes.length))];
    tampung_sticker = sticker[Math.floor((Math.random() * sticker.length))];

    if (tampung_quotes.includes("(by dhika)")) {

        document.getElementById('isi').innerHTML = tampung_quotes;
        document.getElementById('emot').innerHTML = tampung_sticker;
        document.getElementById('bonus').src = "img/kiss.gif";

    } else {

        document.getElementById('isi').innerHTML = tampung_quotes;
        document.getElementById('emot').innerHTML = tampung_sticker;
        document.getElementById('bonus').src = "";
    }

    document.getElementById('gacha').disabled = true;
    document.getElementById('gacha').innerHTML = "Tunggu ya...";
    setTimeout(enabledButton, 5000);

});

function enabledButton() {

    document.getElementById('gacha').disabled = false;
    document.getElementById('gacha').innerHTML = "Gacha";

}
 const words = [
            "Web Applications",
            "IoT Based projects",
            "Python Based projects"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const changingText =
            document.getElementById("changingText");


        function typeWriter() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                // Type the word
                changingText.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                // When word is completely typed
                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeWriter, 1500);

                    return;
                }

            } else {

                // Delete the word
                changingText.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                // When word is completely deleted
                if (charIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex === words.length) {
                        wordIndex = 0;
                    }
                }
            }

            setTimeout(
                typeWriter,
                deleting ? 60 : 100
            );
        }


        // Start typewriter
        typeWriter();



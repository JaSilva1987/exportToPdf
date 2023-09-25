const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.goto('https://www.noticiasautomotivas.com.br/toyota-gr-yaris-ganhara-mais-potencia-chegando-a-304-cavalos/', { waitUntil: 'load', timeout: 60000 });

        // Extrair o texto do conteúdo da página
        const pageText = await page.evaluate(() => {
            const contentElement = document.querySelector('.single-post-content');
            if (contentElement) {
                return contentElement.textContent;
            }
            return ''; // Retorna uma string vazia se o elemento não for encontrado
        });

        // Salvar o texto em um arquivo PDF
        const fs = require('fs');
        await page.pdf({ path: 'conteudo.pdf', format: 'A4' });

        console.log('Texto extraído da página e salvo como conteudo.pdf');

        await browser.close();
    } catch (error) {
        console.error('Erro ao extrair o texto da página:', error);
    }
})();

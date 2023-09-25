const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.goto('https://www.noticiasautomotivas.com.br/toyota-gr-yaris-ganhara-mais-potencia-chegando-a-304-cavalos/', { waitUntil: 'domcontentloaded', timeout: 60000 });

        await page.pdf({ path: 'pagina.pdf', format: 'A4' });

        console.log('Página convertida para PDF com sucesso e salva como pagina.pdf');

        await browser.close();
    } catch (error) {
        console.error('Erro ao converter a página para PDF:', error);
    }
})();

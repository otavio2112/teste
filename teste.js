function redirectToChapter(chapter) {
    if (chapter !== "") {
      // Recupera o livro a partir do parâmetro da URL (ex.: livro.html?book=genesis)
      const urlParams = new URLSearchParams(window.location.search);
      const book = urlParams.get('book');
      // Redireciona para a página do versículo ou capítulo escolhido
      // Aqui o exemplo redireciona para "versiculo.html" com parâmetros de livro e capítulo
      window.location.href = `versiculo.html?book=${book}&chapter=${chapter}`;
    }
  }
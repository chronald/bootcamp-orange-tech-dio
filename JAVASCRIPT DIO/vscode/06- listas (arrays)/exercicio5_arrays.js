/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]*/

   const media = [2,7,3,8,10,4];
       
        for (let i = 0; i < media.length; i++) {
            const medias = media[i];
            if(medias < 5){
                console.log(medias)
            }
        
        }
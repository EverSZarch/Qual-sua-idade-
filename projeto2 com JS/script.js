function verificar() {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`) //formulario ano
    var res = document.querySelector(`div#res`) //resultado
    if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente!')
    }else if (fano.value.length > 0 && fano.value <= 1942) {
    window.alert('Parabéns por estar vivo!')
    }else {
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    var genero = ``
    var img = document.createElement(`img`)
    img.setAttribute(`id` , `foto`)
        if (fsex[0].checked) {
            genero = `Homem`
            if (idade >=0 && idade < 20) {
                    //h20
                    img.setAttribute(`src`,`homem_20_whin.jpeg`)
                } else if (idade < 30){
                    //homi30
                    img.setAttribute(`src` , `homem_30_ney.jpeg`)
                } else if (idade < 40){
                    //homi40
                    img.setAttribute(`src` , `homem_40_leo.jpeg`)
                } else if (idade < 50){
                    //homi50
                    img.setAttribute(`src` , `homem_50_paul.jpeg`)
                } else if (idade < 60){
                    //hommi60
                    img.setAttribute(`src` , `homem_60_pedro.jpeg`)
                } else if (idade < 70){
                    //hommi70
                    img.setAttribute(`src` , `homem_70_samuel.jpeg`)
                } else if (idade < 80){
                    //hommi80   
                    img.setAttribute(`src` , `homem 80.jpeg`)
                }  
                        }
        else if (fsex[1].checked){
            genero = `mulher`
             if (idade >=0 && idade < 20) {
                        //m20
            img.setAttribute(`src`,`mulher_20_larissa.jpeg`)        
                } else if (idade < 30){
                    //m30
            img.setAttribute(`src`,`mulher_30_rihanna.jpeg`)   
                } else if (idade < 40){
                    //m40
            img.setAttribute(`src`,`mulher_40_mariana.jpeg`)   
                } else if (idade < 50){
                    //m50
            img.setAttribute(`src`,`mulher_50_adriana.jpeg`)   
                } else if (idade < 60){
                    //m60
            img.setAttribute(`src`,`mulher_60_christiane_torloni.jpeg`)           
                } else if (idade < 70){
                    //m70
            img.setAttribute(`src`,`mulher_70_ana.jpeg`)        
                } else if  (idade < 80){
                    //m80  
            img.setAttribute(`src`,`mulher_80_helen_mirren.jpeg`)    
                }
            }
        
        }     
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
       
    } 





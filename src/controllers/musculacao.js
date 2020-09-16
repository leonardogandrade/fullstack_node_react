module.exports = {
    planoMusculacao(req,res){
        const response = req.body;
        let msg = "";
        let imc = response.peso / (response.altura)^2;
        
        if(response.sexo == "M"){
            msg = "Seu treino é de para ganhar massa muscular."
        }else{
            msg = "seu treino é para perder gordura."
        }
        res.send(`${msg} - seu IMC=${imc}`);
    }
}
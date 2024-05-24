

create table tb_login(
login_usuario VARCHAR(100) NOT NULL,
senha_login INT NOT NULL
);

create table tb_informacoesusr(
nome varchar(100) primary key not null,
cpf int not null,
endereço varchar(100) not null,
email varchar(100) not null,
numero int not null,
data_nascimento date not null
);

create table tb_respostasusr(
cpf int not null primary key,
resposta varchar(200)
);

SELECT tb_informacoesusr.nome, tb_respostasusr.resposta
FROM tb_informacoesusr
JOIN tb_respostasusr ON tb_informacoesusr.nome = tb_respostasusr.resposta;


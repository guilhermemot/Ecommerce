var usuario = document.getElementById('usuario')
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword')
var nomePessoa = document.getElementById('nomePessoa')
var idadePessoa = document.getElementById('idadePessoa')
var ruaPessoa = document.getElementById('ruaPessoa')
            usuario.addEventListener('focus',()=>{
                usuario.style.borderColor = "#4A5F6A";
            });
            usuario.addEventListener('blur',()=>{
                usuario.style.borderColor = "#ccc";
            });
            password.addEventListener('focus',()=>{
                password.style.borderColor = "#4A5F6A";
            });
            password.addEventListener('blur',()=>{
                password.style.borderColor = "#ccc";
            });
            confirmPassword.addEventListener('focus',()=>{
                confirmPassword.style.borderColor = "#4A5F6A";
            });
            confirmPassword.addEventListener('blur',()=>{
                confirmPassword.style.borderColor = "#ccc";
            });
            nomePessoa.addEventListener('focus',()=>{
                nomePessoa.style.borderColor = "#4A5F6A";
            });
            nomePessoa.addEventListener('blur',()=>{
                nomePessoa.style.borderColor = "#ccc";
            });
            idadePessoa.addEventListener('focus',()=>{
                idadePessoa.style.borderColor = "#4A5F6A";
            });
            idadePessoa.addEventListener('blur',()=>{
                idadePessoa.style.borderColor = "#ccc";
            });
            
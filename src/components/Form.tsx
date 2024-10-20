import { EyeIcon } from 'lucide-react';
// import { EyeOffIcon } from 'lucide-react';

export default function Form() {
  return (
    <form className="">
      <div className="mb-4">
        <label htmlFor="name">Nome Completo</label>
        <input type="text" id="name" />
        {/* Sugestão de exibição de erro de validação */}
        <div className="min-h-4">
          <p className="text-xs text-red-400 mt-1">O nome é obrigatório.</p>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email">E-mail</label>
        <input className="" type="email" id="email" />
      </div>
      <div className="mb-4">
        <label htmlFor="password">Senha</label>
        <div className="relative">
          <input type="password" id="password" />
          <span className="absolute right-3 top-3">
            <EyeIcon size={20} className="text-slate-600 cursor-pointer" />
            {/* <EyeOffIcon
                      className="text-slate-600 cursor-pointer"
                      size={20}
                    /> */}
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="confirm-password">Confirmar Senha</label>
        <div className="relative">
          <input type="password" id="confirm-password" />
          <span className="absolute right-3 top-3">
            <EyeIcon size={20} className="text-slate-600 cursor-pointer" />
            {/* <EyeOffIcon
                  className="text-slate-600 cursor-pointer"
                  size={20}
                /> */}
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phone">Telefone Celular</label>
        <input type="text" id="phone" />
      </div>
      <div className="mb-4">
        <label htmlFor="cpf">CPF</label>
        <input type="text" id="cpf" />
      </div>
      <div className="mb-4">
        <label htmlFor="cep">CEP</label>
        <input type="text" id="cep" />
      </div>
      <div className="mb-4">
        <label htmlFor="address">Endereço</label>
        <input
          placeholder="Carrega automático"
          className="disabled:bg-slate-400 placeholder-red-600 font-bold"
          type="text"
          id="address"
          disabled
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city">Cidade</label>
        <input
          placeholder="Carrega automático"
          className="disabled:bg-slate-400 placeholder-red-600 font-bold"
          type="text"
          id="city"
          disabled
        />
      </div>
      {/* terms and conditions input */}
      <div className="mb-4">
        <input type="checkbox" id="terms" className="mr-2 accent-emerald-500" />
        <label
          className="text-sm  font-light text-slate-100 mb-1 inline"
          htmlFor="terms"
        >
          Aceito os{' '}
          <span className="underline hover:text-slate-400 cursor-pointer">
            termos e condições
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-slate-500 font-semibold text-white w-full rounded-xl p-4 mt-10 hover:bg-slate-600 transition-colors"
      >
        Cadastrar
      </button>
    </form>
  );
}

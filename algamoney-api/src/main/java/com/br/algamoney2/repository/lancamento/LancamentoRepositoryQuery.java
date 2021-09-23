package com.br.algamoney2.repository.lancamento;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.br.algamoney2.model.Lancamento;
import com.br.algamoney2.repository.filter.LancamentoFilter;


public interface LancamentoRepositoryQuery {

	public Page<Lancamento> filtrar(LancamentoFilter lancamentoFilter, Pageable pageable);
	
}

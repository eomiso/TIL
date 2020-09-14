# Bert 사용기


## getting word_embedding from bert tokenizer
```py
def get_bert_word_embedding():
    from transformers import BertModel
    BERT = BertModel.from_pretrained('bert-base-uncased')
    
    num_embeddings = bert_tokenizer.vocab_size + len(bert_tokenizer.get_added_vocab())
    embed_dim = BERT.embeddings.word_embeddings.embedding_dim
    
    # need to add embedding for bos and eos token
    embedding = nn.Embedding(num_embeddings, embed_dim, padding_idx=bert_tokenizer.pad_token_id)
    embedding.weight.data[:bert_tokenizer.vocab_size] = BERT.embeddings.word_embeddings.weight.data
    return embedding
```
" show existing tab with 2 spaces width
set tabstop=2
set softtabstop=2
" when indenting with '>', use 2 spaces width
set shiftwidth=2
let g:gutentags_dont_load=1
let g:tagbar_type_javascript = {
    \ 'ctagstype' : 'JavaScript',
    \ 'kinds'     : [
        \ 'E:exports',
        \ 'F:functions',
        \ 'P:properties',
        \ 'O:objects',
        \ 'A:arrays',
        \ 'V:variables',
        \ 'C:classes',
        \ 'M:members',
        \ 'I:instances',
        \ 'S:styles',
    \ ]
\ }

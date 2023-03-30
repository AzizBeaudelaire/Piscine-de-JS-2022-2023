const normal = "(h)i"; //matches with the expression 'hi'.

const begin = "^(h)i"; //matches with the expression 'hi', only when it is at the beginning.

const end = "(hi\.)$"; //matches with the expression 'hi', only when it is at the end.

const beginEnd = "^(hi\.)$"; //matches with the expression 'hi', only when it is exactly hi.
function sameAmount(str, regex1, regex2) {
    const match1 = str.match(new RegExp(regex1,'g')) || [];
    const match2 = str.match(new RegExp(regex2,'g')) || [];
    return match1.length === match2.length;
}
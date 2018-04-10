export class Parlament {
  id: number;
  idLegislatura: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  uri: string;
  uriPartido: string;
  urlFoto: string;
  urlPartidoFoto: string;
  
  partido: {
    id: number,
    sigla: string,
    nome: string,
    uri: string,
    status: {
      data: string,
      idLegislatura: number,
      situacao: string,
      totalPosse: number,
      totalMembros: number,
      uriMembros: string,
      lider: {
        uri: string,
        nome: string,
        siglaPartido: string,
        uriPartido: string,
        uf: string,
        idLegislatura: number,
        urlFoto: string
      }
    },
    numeroEleitoral: string,
    urlLogo: string,
    urlWebSite: string,
    urlFacebook: string
  }
  
}

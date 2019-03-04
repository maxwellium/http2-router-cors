import { Context, Handler, NEXT } from 'http2-router';

export function http2RouterCors( options?: null ): Handler {

  return function ( ctx: Context ) {

    const { req: { method }, res } = ctx;

    if ( method === 'OPTIONS' ) {

      res.setHeader( 'Access-Control-Allow-Origin', '*' );
      res.setHeader( 'Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE' );
      res.setHeader( 'Content-Length', '0' );
      res.statusCode = 204;
      res.end();

      return;
    }

    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    return NEXT;

  };
}
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Se obtiene el client_id del header o se asigna null
    const clientId = req.headers.client_id || null;
    // Se asigna el client_id al request
    req['client_id'] = clientId;
    next();
  }
}

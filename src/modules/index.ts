import * as express from 'express';
import { getDocumentation, getPdf } from '../container/controllers';

export default express.Router().use(`/swagger`, getDocumentation).use(`/pdf`, getPdf);

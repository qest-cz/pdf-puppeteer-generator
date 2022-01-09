import config from '../../config';
import { createGetPdfController } from '../../modules/pdf';
import { createGetStatusController } from '../../modules/status';
import { createGetDocumentationController } from '../../modules/swagger';
import { pdfService } from '../app';
import { swaggerGenerator } from '../system';

export const getStatus = createGetStatusController(config);

export const getDocumentation = createGetDocumentationController(swaggerGenerator);

export const getPdf = createGetPdfController(pdfService);

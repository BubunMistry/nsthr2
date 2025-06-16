import express from 'express';
import { 
  submitContactForm, 
  getAllContactForms, 
  deleteContactForm 
} from '../controllers/contactFormController.js';

const router = express.Router();

router.post('/submit', submitContactForm);
router.get('/all', getAllContactForms); 
router.delete('/:id', deleteContactForm); 
export default router;
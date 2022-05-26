import { Controller, Get } from 'routing-controllers';
import axios from 'axios';
@Controller()
export class IndexController {
  @Get('/api/memes')
  async index() {
    const endpoint = 'https://api.imgflip.com/get_memes';
    const memesResponse = await axios.get(endpoint);
    const memes = memesResponse.data.data ? memesResponse.data.data : memesResponse.data;
    return memes;
  }
}

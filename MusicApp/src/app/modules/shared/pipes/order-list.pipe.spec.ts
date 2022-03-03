import { trackModel } from '@core/models/track.model';
import { OrderListPipe } from './order-list.pipe';

describe('OrderListPipe', () => {
  const mockTracksRaw =
    { "data": [{ "_id": 1, "name": "Getting Over", "album": "One Love", "cover": "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg", "artist": { "name": "David Guetta", "nickname": "David Guetta", "nationality": "FR" }, "duration": { "start": 0, "end": 333 }, "url": "http://localhost:3001/track.mp3" }, { "_id": 2, "name": "Snow Tha Product || BZRP Music Sessions #39", "album": "BZRP Music Sessions", "cover": "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg", "artist": { "name": "Snow", "nickname": "Snow", "nationality": "US" }, "duration": { "start": 0, "end": 333 }, "url": "http://localhost:3001/track-1.mp3" }, { "_id": 3, "name": "Calypso (Original Mix)", "album": "Round Table Knights", "cover": "https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg", "artist": { "name": "Round Table Knights", "nickname": "Round Table Knights", "nationality": "US" }, "duration": { "start": 0, "end": 333 }, "url": "http://localhost:3001/track-2.mp3" }, { "_id": 4, "name": "Bad Habits", "album": "Ed Sheeran", "cover": "https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/11372/tema/25301/ed_sheeran_bad_habits-portada.jpg", "artist": { "name": "Ed Sheeran", "nickname": "Ed Sheeran", "nationality": "UK" }, "duration": { "start": 0, "end": 333 }, "url": "http://localhost:3001/track-4.mp3" }] };

  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });


  it('testing input and output the values', () => {
    // ARRANGE
    const pipe = new OrderListPipe();
    const { data }: any = mockTracksRaw;

    // ACT
    /* Se ejecuta un Pipe en un componente con el metodo .transform */
    const result: trackModel[] = pipe
      .transform(data);

    // ASSERT
    // console.log('♠',data);

    expect(result).toEqual(data);
  });

  it('test the order "ASC"', () => {
    // Arrange
    const pipe = new OrderListPipe();
    const data:trackModel[] = mockTracksRaw.data;
    const firstValue = data.find((item: any) => item._id === 4);
    const lastValue = data.find((item: any) => item._id === 2);
    // ACT
    const result: trackModel[] = pipe.transform(data, 'name', 'asc');
    const firstResult : any = result[0];
    const lastResult :any = result[result.length - 1];

    // ASSERT
    console.log("---------------");
    console.log(firstResult);
    console.log(firstValue);

    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);

  });


  it('test the order "DESC"', () => {
    // Arrange
    const pipe = new OrderListPipe();
    const data:trackModel[] = mockTracksRaw.data;
    const firstValue = data.find((item: any) => item._id === 4);
    const lastValue = data.find((item: any) => item._id === 2);
    // ACT
    const result: trackModel[] = pipe.transform(data, 'name', 'desc');
    const firstResult : any = result[0];
    const lastResult :any = result[result.length - 1];

    // ASSERT
    console.log("---------------");
    console.log(firstResult);
    console.log(firstValue);

    expect(firstResult).toEqual(lastValue);
    expect(lastResult).toEqual(firstValue);

  });
});

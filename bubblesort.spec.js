describe('Bubble Sort', function(){

  //before each
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an unsorted array of numbers', function(){
    expect( bubbleSort([4,1,7,2], isLessThan) ).toEqual( [1,2,4,7] );
    // swap([1,2], callback);
    // swap([1,2], callback);
    // swap([1,2], callback);
    // swap([1,2], callback);
    //expect(window.swap.calls.count()).toEqual(4);
  });

  it('takes a function and handles', function(){
    expect( bubbleSort([4,1,7,2]) ).toEqual( [1,2,4,7] );
  });


});

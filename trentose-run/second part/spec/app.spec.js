describe("App", function() {
    describe("Coach.start", function() {
  it("should not start with a negative number", function() { 
      expect(Coach.start(-1)).toBe(false);
  }); 
    
  it("should start with a proper input", function() { 
      expect(Coach.start("easy")).toBe(true);
  });
    });
    
  describe("Coach.track", function() {
        
  it("should not track with a wrong input", function() {
      Coach.start("easy");
      expect(Coach.track(0,10)).toBe(null);
  });
      
  it("should track with a proper input", function() { 
      expect(Coach.track("walk",10)).toBe(500);
  });
  
  });
  
  describe("Coach.checkProgress", function() {
        
  it("should not check progress with a wrong input", function() { 
      Coach.start(0);
      expect(Coach.checkProgress()).toBe(null);
  });
      
  it("should track with a proper input", function() { 
      Coach.start("easy");
      Coach.track("walk",10);
      expect(Coach.checkProgress()).toBe(100);
  });
  
  });
    
});

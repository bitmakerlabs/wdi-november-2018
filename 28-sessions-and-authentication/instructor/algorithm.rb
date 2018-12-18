submitted_email = params[:email]
submitted_password = params[:password] #abcd1234

u = User.find_by(email: submitted_email)
salt = u.password_digest(0..2)
hashed_salted_password = u.password_digest(3..-1)

if u && hashed_salted_password == hash(submitted_password, salt)
  # Access granted!
else
  # Access denied
end

def hash(x, salt)
  ...
end

#def unhash(x) ----  DOES NOT EXIST!
#end

def encrypt(x)
  ...
end

def decrypt(x)
  ...
end
